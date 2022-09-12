/*Without Props
function TestName(){
    return(
      <span>Name: Rafaela</span>
    );
}
*/

/*With Props
function TestName(props){
  return(
    <span>Name: {props.person}</span>
  );
}
*/

//same up
function TestName({person}){
  return(
    <span>Name: {person}</span>
  );
}

export default TestName;


