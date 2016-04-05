// You just need to create your "sub-components" as attributes of the main component

var MyFormComponent = React.createClass({...});
MyFormComponent.Row = React.createClass({...});
MyFormComponent.Label = React.createClass({...});
MyFormComponent.Input = React.createClass({...});

var Form = MyFormComponent;
var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
);

