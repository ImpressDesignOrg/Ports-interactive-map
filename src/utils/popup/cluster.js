export const clusterConfig = {
  type: "cluster",
  // A cluster radius of 100px indicates an area comprising screen space 100px
  // in length from the center of the cluster
  clusterRadius: "100px",
  clusterMinSize: "24px",
  clusterMaxSize: "60px",
  labelingInfo: [
    {
      deconflictionStrategy: "none",
      labelExpressionInfo: {
        expression: "Text($feature.cluster_count, '#,###')",
      },
      symbol: {
        type: "text",
        color: "#004a5d",
        font: {
          weight: "bold",
          family: "Noto Sans",
          size: "12px",
        },
      },
      labelPlacement: "center-center",
    },
  ],
};
