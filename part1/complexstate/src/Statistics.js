import StatisticLine from "./StatisticLine";

function Statistics(props) {
  return (
    <div>
        <StatisticLine text="all" value ={props.good+props.neutral+props.bad} />
        <StatisticLine text="average" value ={(props.good+props.neutral+props.bad)/3} />
        <StatisticLine text="positive" value ={`${(props.good/(props.good+props.neutral+props.bad))*100}%`} />
    </div>
  );
}

export default Statistics;
