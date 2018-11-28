import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const MyJumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Celso Oliveira</h1>
        <p className="lead">If you design it, they will build it. If they build it, it will come. </p>
        <hr className="my-2" />
        <p>Enterprise | Web |  Mobile | Social </p>
        <p className="lead">
          <Button color="primary">Portfolio</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;