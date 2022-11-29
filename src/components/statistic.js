import '../styles/statistic.css';
import '../../node_modules/react-vis/dist/style.css';
import AutoSizer from "react-virtualized-auto-sizer";
import gif from "../media/gif1.gif";
import {
  DiscreteColorLegend,
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis';

const timestamp = new Date('2018');

function StatisticPart() {
  return (
    <div id="statisticPart" class="contentPart evenContentPart">
    <div id="statisticContent">
    <div id="statisticTitle">Статистика нашего приюта</div>
        <div id="mainContent">
          <div id="graph">
            <AutoSizer>
              {({height, width})=> (
                <XYPlot width={width} height={height} xType='ordinal' >
                <DiscreteColorLegend 
                height={200} width={width/2.2} 
                style={{position: 'absolute', top:"-3vw", left:"5vw", fontFamily:"sans-serif", fontSize:"1vw"}}
                orientation="horizontal"
                items={[{
                  title: "Кошки",
                  color: "#9492FF"
                }, {
                  title:"Собаки",
                  color: "#FFC692"
                  }]} />
                <VerticalGridLines 
                style={{stroke:"#444", strokeWidth:"0.03vw"}}
                />
                <HorizontalGridLines 
                style={{stroke:"#444", strokeWidth:"0.03vw"}}
                />
                <XAxis 
                tickValues={["2018", "2019", "2020", "2021", "2022"]}
                style={{
                  line: {stroke: '#444', strokeWidth:"0.03vw"},
                  ticks: {stroke: '#444', strokeWidth:"0.03vw"},
                  text: {stroke: 'none', fill: '#444', fontWeight: 600, fontSize: "1vw", fontFamily:"sans-serif"}
                }}/>
                <YAxis 
                tickValues={[10, 20, 30, 40, 50]}
                style={{
                  line: {stroke: '#444', strokeWidth:"0.03vw"},
                  ticks: {stroke: '#444', strokeWidth:"0.03vw"},
                  text: {stroke: 'none', fill: '#444', fontWeight: 600, fontSize: "1vw", fontFamily:"sans-serif"}
                }}/>
                <LineMarkSeries
                  lineStyle={{stroke: '#9492FF', strokeWidth:"0.3vw"}}
                  markStyle={{fill:"#9492FF", strokeWidth:"0.3vw", stroke:"#9492FF"}}
                  className="linemark-series-example"
                  curve={'curveMonotoneX'}
                  data={[{x: "2018", y: 0}, {x:"2019", y:28} , {x:"2020", y:21}, {x:"2021", y:40},{x: "2022", y: 50}]}
                />
                <LineMarkSeries
                lineStyle={{stroke: '#FFC692', strokeWidth:"0.3vw"}}
                markStyle={{fill:"#FFC692", strokeWidth:"0.3vw", stroke:"#FFC692"}}
                
                  className="linemark-series-example-2"
                  curve={'curveMonotoneX'}
                  data={[{x: "2018", y: 0}, {x:"2019", y:12} , {x:"2020", y:8}, {x:"2021", y:15},{x: "2022", y: 20}]}
                />
              </XYPlot>
              )}
            </AutoSizer>
          </div>
          <div id="statisticInfo">
            <p>На данном графике мы постарались наглядно продемонстрировать результат работы, проделанной с 2018 года.</p>
            <p>По вертикали отображается количество животных, которые обрели новую семью и отправились в новую счастливую жизнь, покинув наш приют.</p>
          </div>
        </div>
        <img id="statisticGif" src={gif} alt='Гифка'/>
      </div>
    </div>
  );
}

export default StatisticPart;

