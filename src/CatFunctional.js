export default function CatFunctional(props) {
  return (
    <div>
      <img height={"200px"} width={"200px"} src={`./asset/${props.image}`} alt={props.name} />
      <h4 style={{ margin: 0 }}>name : {props.name}</h4>
      <h4 style={{ margin: 0 }}>price : {props.price}</h4>
    </div>
  );
}
