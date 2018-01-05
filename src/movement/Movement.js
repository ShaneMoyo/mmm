import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import { 
  Box,
  Hero,
  HeroHeader,
  Nav,
  NavItem,
  NavLeft,
  NavRight,
  NavCenter,
  Icon,
  HeroBody,
  Container,
  Title,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink
 } from 'bloomer';

class Movement extends Component { 

  state = { 
    active: 'tab1'
  }

  onClickTab = tab => this.setState({ active: tab})
  

  render(){
    let tabView;

    const tabViews = { 
      tab1: (<Box>tab 1</Box>),
      tab2: (<Box>tab 2</Box>),
      tab3: (<Box>tab 3</Box>)
    };
  
    return(
      <div>
        <Hero isColor='info' isSize='medium'>
          <Navigation/>
          <HeroBody>
            <Container hasTextAlign='centered'>
              <Title>Movement Page Info</Title>
            </Container>
          </HeroBody>
          <HeroFooter>
            <Tabs isBoxed isFullWidth>
              <Container>
                <TabList>
                    <Tab isActive={'tab1' === this.state.active } onClick={() => this.onClickTab('tab1')}><TabLink>Tab 1</TabLink></Tab>
                    <Tab isActive={'tab2' === this.state.active } onClick={() => this.onClickTab('tab2')}><TabLink>Tab 2</TabLink></Tab>
                    <Tab isActive={'tab3' === this.state.active } onClick={() => this.onClickTab('tab3')}><TabLink>tab 3</TabLink></Tab>
                </TabList>
              </Container>
            </Tabs>
          </HeroFooter>
        </Hero>
        {tabViews[this.state.active]}
      </div>
    );
  }
}

export default Movement; 