Highcharts.chart('chart1', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Current<br>Applicants<br>Status',
      align: 'center',
      verticalAlign: 'middle',
      y: 40
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['Pending', 58.9],
        ['Flagged', 13.29],
        ['Shortlisted', 20.2],
        {
          dataLabels: {
            enabled: false
          }
        }
      ]
    }]
  });
  
  Highcharts.chart('state-reg', {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: 'Download CSV or XLS to view all'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '9px'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number (thousands)'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Population in 2017: <b>{point.y:.1f} thousand </b>'
    },
    series: [{
      name: 'Population',
      data: [
        ['Abia', 2],
        ['Adamawa', 8],
        ['Akwa Ibom', 9],
        ['Anambra', 7],
        ['Bauchi', 1],
        ['Bayelsa', 3],
        ['Benue', 7],
        ['Bornu', 4],
        ['Cross River', 6],
        ['Delta', 5],
        ['Ebonyi', 6],
        ['Ekiti', 4],
        ['Edo', 7],
        ['Enugu', 1],
        ['Gombe', 2],
        ['Imo', 1],
        ['Jigawa', 6],
        ['Kaduna', 3],
        ['Kano', 9],
        ['Katsina', 1],
        ['Kebbi', 8],
        ['Kogi', 9],
        ['Kwara', 6],
        ['Lagos', 3],
        ['Nasawara', 2],
        ['Niger', 8]
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '9px'
        }
      }
    }]
  });

  // Radialize the colors
Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
      },
      stops: [
        [0, color],
        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
      ]
    };
  })
});

// Build the chart
Highcharts.chart('geopolitical', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        },
        connectorColor: 'silver'
      }
    }
  },
  series: [{
    name: 'Share',
    data: [
      { name: 'North-East', y: 61.41 },
      { name: 'North-Central', y: 11.84 },
      { name: 'North-West', y: 10.85 },
      { name: 'South-South', y: 4.67 },
      { name: 'South-East', y: 4.18 },
      { name: 'South-West', y: 7.05 }
    ]
  }]
});
  // REVIEWERS ACTIVITY
  Highcharts.chart('reviewer', {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: 'As 20/03/2019'
    },
    plotOptions: {
      pie: {
        innerSize: 50,
        depth: 45
      }
    },
    series: [{
      name: 'Activity',
      data: [
        ['Reviewed', 8],
        ['Pending', 3],
        ['Flagged', 1],
        ['Escalted', 2]
      ]
    }]
  });