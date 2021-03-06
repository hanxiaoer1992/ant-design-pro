import numeral from 'numeral';
import './g2';
import ChartCard from './ChartCard';
import Bar from './Bar';
import Rowbar from './Rowbar';
import Line from './Line';
import Route from './Route';
import Routee from './Routee';
import Pie from './Pie';
import Radar from './Radar';
import Gauge from './Gauge';
import MiniArea from './MiniArea';
import MiniBar from './MiniBar';
import MiniProgress from './MiniProgress';
import Field from './Field';
import WaterWave from './WaterWave';
import TagCloud from './TagCloud';
import TimelineChart from './TimelineChart';

const yuan = val => `&yen; ${numeral(val).format('0,0')}`;

export {
  yuan,
  Bar,
  Rowbar,
  Line,
  Route,
  Routee,
  Pie,
  Gauge,
  Radar,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  WaterWave,
  TagCloud,
  TimelineChart,
};
