import React from 'react'
import ReactDOM from 'react-dom'
import {shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {ApiProvider} from '../../context/ApiContext'


describe('App component', ()=>{
  it('renders a page by default', ()=>{
    const wrapper =shallow(<BrowserRouter><App/></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
 
  it('renders App given Context', ()=>{
    const wrapper = shallow(<BrowserRouter><ApiProvider><App/></ApiProvider></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
