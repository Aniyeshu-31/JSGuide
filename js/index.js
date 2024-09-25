// Define the region of interest (North East India)
var region = ee.Geometry.Polygon([
  [
    [89.49951171875, 26.190259562028816],
    [91.2469482421875, 26.190259562028816],
    [91.2469482421875, 28.25974601368628],
    [89.49951171875, 28.25974601368628],
  ],
])

// Filter MODIS Vegetation Continuous Fields (VCF) dataset
var modisVCF = ee
  .ImageCollection('MODIS/006/MOD44B')
  .filterBounds(region)
  .select('Percent_Tree_Cover')

// Function to add NDVI band to the image
var addNDVI = function (image) {
  var ndvi = image
    .expression('(NDVI - 50) / 50', {
      NDVI: image.select('Percent_Tree_Cover'),
    })
    .rename('NDVI')
  return image.addBands(ndvi)
}

// Map the addNDVI function over the collection
modisVCF = modisVCF.map(addNDVI)

// Function to calculate statistics (mean, standard deviation, min, max) for each year
var calculateStatistics = function (year) {
  // Cast year to a number
  year = ee.Number(year)

  var filtered = modisVCF.filter(
    ee.Filter.calendarRange(year, year.add(1), 'year')
  )
  var mean = filtered.reduce(ee.Reducer.mean())
  var stdDev = filtered.reduce(ee.Reducer.stdDev())
  var min = filtered.reduce(ee.Reducer.min())
  var max = filtered.reduce(ee.Reducer.max())
  return mean.addBands(stdDev).addBands(min).addBands(max).set('year', year)
}
// Generate a time series of statistics for each year (last 15 years)
var startYear = 2007 // Update with the desired start year
var endYear = startYear + 15 // Calculate end year based on the start year
var years = ee.List.sequence(startYear, endYear)

var timeSeries = ee.ImageCollection.fromImages(years.map(calculateStatistics))

// Print the time series
print('Time Series:', timeSeries)

// Chart the time series
var chart = ui.Chart.image.series({
  imageCollection: timeSeries.select([
    'NDVI_mean',
    'NDVI_stdDev',
    'NDVI_min',
    'NDVI_max',
  ]),
  region: region,
  reducer: ee.Reducer.mean(),
  scale: 500,
  xProperty: 'year',
})

// Display the chart
print(chart)
