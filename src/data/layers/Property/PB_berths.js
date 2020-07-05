const symbol = {
  type: 'picture-marker',
  url: 'https://f399e9-5fsa23.netlify.app/images/marker--airports.png',
  width: '30px',
  height: '30px',
};

const PB_berthLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Botany Berth',
    highlightEnabled: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'TextString',
            label: 'Name',
            visible: true,
          },
          {
            fieldName: 'ChannelMaintainedDepth',
            label: 'Channel Maintained Depth',
            visible: true,
          },
          {
            fieldName: 'DynamicUnderkeelClearanceSystemInUse',
            label: 'Dynamic Underkeel Clearance System in use',
            visible: true,
          },
          {
            fieldName: 'StaticVesselDraftInChannel',
            label: 'Static Vessel Draft In Channel',
            visible: true,
          },
          {
            fieldName: 'UKCRequirementsAtBerth',
            label: 'UKC Requirements At Berth',
            visible: true,
          },
          {
            fieldName: 'DeclaredDepthAtBerth',
            label: 'Declared Depth At Berth',
            visible: true,
          },
          {
            fieldName: 'IndicativeVesselDraftAtBerth',
            label: 'Indicative Vessel Draft At Berth',
            visible: true,
          },
          {
            fieldName: 'MaxVesselLength',
            label: 'Max Vessel Length',
            visible: true,
          },
          {
            fieldName: 'BerthBoxLength',
            label: 'Berth Box Length',
            visible: true,
          },
          {
            fieldName: 'BerthBoxWidth',
            label: 'Berth Box Width',
            visible: true,
          },
          {
            fieldName: 'WharfLevel',
            label: 'Wharf Level',
            visible: true,
          },
          {
            fieldName: 'AirDraftLevel',
            label: 'Air Draft Level',
            visible: true,
          },
          {
            fieldName: 'MaxVesselDeadweight',
            label: 'Max Vessel Deadweight',
            visible: true,
          },
          {
            fieldName: 'MaxVesselDisplacementBerthingVelocity',
            label: 'Max Vessel Displacement Berthing Velocity',
            visible: true,
          },
          {
            fieldName: 'MooringEquipment',
            label: 'Mooring Equipment',
            visible: true,
          },
          {
            fieldName: 'TidalRange',
            label: 'Tidal Range',
            visible: true,
          },
          {
            fieldName: 'RailAccess',
            label: 'Rail Access',
            visible: true,
          },
          {
            fieldName: 'Commodities',
            label: 'Commodities',
            visible: true,
          },
          {
            fieldName: 'UnloadingEquipment',
            label: 'Unloading Equipment',
            visible: true,
          },
          {
            fieldName: 'OperatingHours',
            label: 'Operating Hours',
            visible: true,
          },
          {
            fieldName: 'BerthManager',
            label: 'Berth Manager',
            visible: true,
          },
          {
            fieldName: 'PotableWaterAvailable',
            label: 'Potable Water Available',
            visible: true,
          },
          {
            fieldName: 'AdditionalInformation',
            label: 'Additional Information',
            visible: true,
          },
          {
            fieldName: 'Disclaimer',
            label: 'Disclaimer',
            visible: true,
          },
        ],
      },
    ],
  },
  renderer: {
    type: 'simple',
    symbol,
  },
};

export default PB_berthLayer;
