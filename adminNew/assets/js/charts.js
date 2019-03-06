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

  // States
  Highcharts.chart('stateDis', {
    chart: {
      type: 'packedbubble',
      height: '100%'
    },
    title: {
      text: ''
    },
    tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.y}m CO<sub>2</sub>'
    },
    plotOptions: {
      packedbubble: {
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          filter: {
            property: 'y',
            operator: '>',
            value: 250
          },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal'
          }
        },
        minPointSize: 5
      }
    },
    series: [{
      name: '1k-2k',
      data: [{
        name: 'Abia',
        value: 767.1
      }, {
        name: 'Adamawa',
        value: 20.7
      },
      {
        name: "Akwa Ibom",
        value: 97.2
      },
      {
        name: "Anambra",
        value: 111.7
      },
      {
        name: "Bayelsa",
        value: 158.1
      },
      {
        name: "Bauchi",
        value: 241.6
      },
      {
        name: "Benue",
        value: 249.1
      },
      {
        name: "Borno",
        value: 298.1
      },
      {
        name: "Cross River",
        value: 323.7
      },
      {
        name: "Delta",
        value: 78.3
      },
      {
        name: "Ebonyi",
        value: 415.4
      }, {
        name: "Edo",
        value: 353.2
      }, {
        name: "Ekiti",
        value: 337.6
      },
      {
        name: "Enugu",
        value: 71.1
      },
      {
        name: "Gombe",
        value: 69.8
      },
      {
        name: "Imo",
        value: 67.7
      },
      {
        name: "Jigawa",
        value: 59.3
      },
      {
        name: "Kano",
        value: 7.2
      }]
    }, {
      name: '3k-4k',
      data: [{
        name: "Kebbi",
        value: 8.2
      },
      {
        name: "Kogi",
        value: 9.2
      },
      {
        name: "Kwara",
        value: 13.1
      },
      {
        name: "Algeria",
        value: 141.5
      }]
    }, {
      name: '2k-3k',
      data: [{
        name: "Australia",
        value: 409.4
      },
      {
        name: "New Zealand",
        value: 34.1
      },
      {
        name: "Papua New Guinea",
        value: 7.1
      }]
    }, {
      name: '3k-4k',
      data: [{
        name: "Costa Rica",
        value: 7.6
      },
      {
        name: "Honduras",
        value: 8.4
      },
      {
        name: "Jamaica",
        value: 8.3
      },
      {
        name: "Panama",
        value: 10.2
      },
      {
        name: "Guatemala",
        value: 12
      },
      {
        name: "Dominican Republic",
        value: 23.4
      },
      {
        name: "Cuba",
        value: 30.2
      },
      {
        name: "Lagos",
        value: 5334.5
      }, {
        name: "Kaduna",
        value: 566
      }, {
        name: "Mexico",
        value: 456.3
      }]
    }, {
      name: '4k-5k',
      data: [{
        name: "El Salvador",
        value: 7.2
      },
      {
        name: "Uruguay",
        value: 8.1
      },
      {
        name: "Brazil",
        value: 501.1
      }, {
        name: "Argentina",
        value: 199
      },
      {
        name: "Venezuela",
        value: 195.2
      }]
    }, {
      name: '6k-7k',
      data: [{
        name: "Nepal",
        value: 6.5
      },
      {
        name: "Georgia",
        value: 6.5
      },
      {
        name: "Brunei Darussalam",
        value: 7.4
      },
      {
        name: "Kyrgyzstan",
        value: 7.4
      },
      {
        name: "Afghanistan",
        value: 7.9
      },
      {
        name: "Myanmar",
        value: 9.1
      },
      {
        name: "Mongolia",
        value: 14.7
      },
      {
        name: "Sri Lanka",
        value: 16.6
      },
      {
        name: "Bahrain",
        value: 20.5
      },
      {
        name: "Yemen",
        value: 22.6
      },
      {
        name: "Jordan",
        value: 22.3
      },
      {
        name: "Lebanon",
        value: 21.1
      },
      {
        name: "Azerbaijan",
        value: 31.7
      },
      {
        name: "Singapore",
        value: 47.8
      },
      {
        name: "Hong Kong",
        value: 49.9
      },
      {
        name: "Syria",
        value: 52.7
      },
      {
        name: "DPR Korea",
        value: 59.9
      },
      {
        name: "Israel",
        value: 64.8
      },
      {
        name: "Turkmenistan",
        value: 70.6
      },
      {
        name: "Oman",
        value: 74.3
      },
      {
        name: "Qatar",
        value: 88.8
      },
      {
        name: "Philippines",
        value: 96.9
      },
      {
        name: "Kuwait",
        value: 98.6
      },
      {
        name: "Uzbekistan",
        value: 122.6
      },
      {
        name: "Iraq",
        value: 139.9
      },
      {
        name: "Pakistan",
        value: 158.1
      },
      {
        name: "Vietnam",
        value: 190.2
      },
      {
        name: "United Arab Emirates",
        value: 201.1
      },
      {
        name: "Malaysia",
        value: 227.5
      },
      {
        name: "Abuja",
        value: 10540.8
      },
      {
        name: "Korea",
        value: 610.1
      }]
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },

      }]
    }
  });
  