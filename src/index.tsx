import React, { memo, useMemo, forwardRef, type ForwardedRef } from 'react';
import WebView from 'react-native-webview';
import Markdown from 'markdown-it';
import { StyleSheet } from 'react-native';

interface Props {
  config?: string;
  addPlugins?: string;
  addScript?: string;
  styleChart?: string;
}

const ChartJS = forwardRef<WebView, Props>(
  (props: Props, ref: ForwardedRef<WebView>): JSX.Element => {
    const {
      config = '',
      addPlugins = '',
      styleChart = 'position: relative; height:100vh; width:100wh',
    } = props;

    const mdValue = useMemo(() => {
      const md = new Markdown({ html: true });
      const parseData = `
      <script src="https://polyfill.io/v3/polyfill.js?version=3.111.0"></script>
      <script src="https://cdn.jsdelivr.net/gh/hoanglam10499/chartjs4-fix-cdn/chart.umd.min.js"></script>
      {ADD_PLUGINS}
      <div style="background-color;'rgba(0,0,0,0)';overflow: hidden;margin: 0 auto;">
      <canvas id="myChart" style="{STYLE_CHART}"></canvas>
      </div>
      <script>
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {CONFIG})
      </script>
      `
        .replace('CONFIG', config)
        .replace('ADD_PLUGINS', addPlugins)
        .replace('STYLE_CHART', styleChart);
      return md.render(parseData);
    }, [config, addPlugins, styleChart]);

    return (
      <WebView
        ref={ref}
        style={styles.webview}
        source={{ html: mdValue }}
        scalesPageToFit={false}
        bounces={false}
      />
    );
  }
);

export default memo(ChartJS);

const styles = StyleSheet.create({
  webview: { flex: 1 },
});
