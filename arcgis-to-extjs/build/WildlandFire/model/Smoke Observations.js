Ext.define('WildlandFire.model.Smoke Observations', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'GeometryID',
    type: 'string',
    useNull: true
  },{
    name: 'FireName',
    type: 'string',
    useNull: true
  },{
    name: 'Un_Fire_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Unit_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Fire_Year',
    type: 'int',
    useNull: true
  },{
    name: 'Local_Inci_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Date',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'Time',
    type: 'int',
    useNull: true
  },{
    name: 'Elevation',
    type: 'int',
    useNull: true
  },{
    name: 'AvgWindSpeed',
    type: 'int',
    useNull: true
  },{
    name: 'MaxWindSpeed',
    type: 'int',
    useNull: true
  },{
    name: 'WindDir',
    type: 'string',
    useNull: true
  },{
    name: 'DirOfSmkCol',
    type: 'string',
    useNull: true
  },{
    name: 'AltOfSmkCol',
    type: 'int',
    useNull: true
  },{
    name: 'AltOfInvLyr',
    type: 'int',
    useNull: true
  },{
    name: 'PlumeType',
    type: 'string',
    useNull: true
  },{
    name: 'SmkSensAreas',
    type: 'string',
    useNull: true
  },{
    name: 'Comments',
    type: 'string',
    useNull: true
  },{
    name: 'Observer',
    type: 'string',
    useNull: true
  },{
    name: 'RegionCode',
    type: 'string',
    useNull: true
  },{
    name: 'GroupCode',
    type: 'string',
    useNull: true
  },{
    name: 'UnitCode',
    type: 'string',
    useNull: true
  },{
    name: 'MapMethod',
    type: 'string',
    useNull: true
  },{
    name: 'Data_Source',
    type: 'string',
    useNull: true
  },{
    name: 'Source_Date',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'Date_Current',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'H_Accuracy',
    type: 'string',
    useNull: true
  },{
    name: 'Restriction',
    type: 'string',
    useNull: true
  },{
    name: 'MetadataID',
    type: 'string',
    useNull: true
  },{
    name: 'GlobalID',
    type: 'string',
    useNull: true
  },{
    name: 'LatNAD83',
    type: 'float',
    useNull: true
  },{
    name: 'LongNAD83',
    type: 'float',
    useNull: true
  },{
    name: 'PK_GUID',
    type: 'undefined',
    useNull: true
  },{
    name: 'EditName',
    type: 'string',
    useNull: true
  },{
    name: 'CreateName',
    type: 'string',
    useNull: true
  },{
    name: 'CreateDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Smoke Observations,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'GeometryID',
    max: 50,
    type: 'length'
  },{
    field: 'FireName',
    max: 50,
    type: 'length'
  },{
    field: 'Un_Fire_ID',
    max: 22,
    type: 'length'
  },{
    field: 'Unit_ID',
    max: 7,
    type: 'length'
  },{
    field: 'Local_Inci_ID',
    max: 10,
    type: 'length'
  },{
    field: 'WindDir',
    max: 30,
    type: 'length'
  },{
    field: 'DirOfSmkCol',
    max: 30,
    type: 'length'
  },{
    field: 'PlumeType',
    max: 50,
    type: 'length'
  },{
    field: 'SmkSensAreas',
    max: 255,
    type: 'length'
  },{
    field: 'Comments',
    max: 500,
    type: 'length'
  },{
    field: 'Observer',
    max: 50,
    type: 'length'
  },{
    field: 'RegionCode',
    max: 3,
    type: 'length'
  },{
    field: 'GroupCode',
    max: 10,
    type: 'length'
  },{
    field: 'UnitCode',
    max: 10,
    type: 'length'
  },{
    field: 'MapMethod',
    max: 50,
    type: 'length'
  },{
    field: 'Data_Source',
    max: 50,
    type: 'length'
  },{
    field: 'H_Accuracy',
    max: 20,
    type: 'length'
  },{
    field: 'Restriction',
    max: 3,
    type: 'length'
  },{
    field: 'MetadataID',
    max: 50,
    type: 'length'
  },{
    field: 'EditName',
    max: 50,
    type: 'length'
  },{
    field: 'CreateName',
    max: 50,
    type: 'length'
  }]
});