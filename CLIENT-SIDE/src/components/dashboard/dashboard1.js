import React from "react";
import { Statistic, Header } from "semantic-ui-react";

export default function Dashboard1() {
  return (
    <div className="dashboard">
      <Header
        as="h2"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5EgKyegrZiRGNutsVVh3oqh91egAbaSRQg&usqp=CAU"
        content="Recent Activity "
      />
      <hr />
      <Statistic.Group horizontal>
        <Statistic>
          <Statistic.Value>43</Statistic.Value>
          <Statistic.Label>ATTENDED CLASS</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>33</Statistic.Value>
          <Statistic.Label>DOWNLOADED ASSIGNMENTS</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>27</Statistic.Value>
          <Statistic.Label>JOINED QUIZ</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  );
}
