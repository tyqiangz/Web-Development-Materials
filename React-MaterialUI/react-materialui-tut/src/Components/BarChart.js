import React, { PureComponent, Fragment } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';

const data = [
  {
    name: 'Sector A',
    num_grads: 2400,
  },
  {
    name: 'Sector B',
    num_grads: 1398,
  },
  {
    name: 'Sector C',
    num_grads: 9800,
  },
  {
    name: 'Sector D',
    num_grads: 3908,
  },
  {
    name: 'Sector E',
    num_grads: 4800,
  },
  {
    name: 'Sector F',
    num_grads: 3800,
  },
  {
    name: 'Sector G',
    num_grads: 4300,
  },{
    name: 'Sector H',
    num_grads: 4300,
  },{
    name: 'Sector I',
    num_grads: 4300,
  },{
    name: 'Sector J',
    num_grads: 4300,
  },{
    name: 'Sector K',
    num_grads: 4300,
  },{
    name: 'Sector L',
    num_grads: 4300,
  },{
    name: 'Sector L',
    num_grads: 4300,
  },{
    name: 'Sector L',
    num_grads: 4300,
  },{
    name: 'Sector L',
    num_grads: 4300,
  },{
    name: 'Sector L',
    num_grads: 4300,
  },{
    name: 'Sector L',
    num_grads: 4300,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
    <Fragment>
        <Title>Industries</Title>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="num_grads" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
      </Fragment>
    );
  }
}
