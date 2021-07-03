import React, {Component} from "react";
import {
  Icon,
  Slider,
  Slide,
  Row,
  Col,
  Card,
  CardTitle,
  Caption,
  SideNav,
  SideNavItem,
  Button,
  Pagination
} from "react-materialize";
import { 
  FaUserAlt, 
  FaQuestionCircle,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

class App extends Component{
  render(){
    return(
      <div>
        <Row></Row>
        {/* Side Navigation */}
        <Row>
          <Col>
            <SideNav
              id="SideNav-10"
              options={{
                draggable: true
              }}
              trigger={<Button node="button"><Icon medium>menu</Icon></Button>}
            >
              <SideNavItem
                user={{
                  background: 'https://placeimg.com/640/480/tech',
                  email: 'test@gmail.com',
                  image: 'https://react.semantic-ui.com/images/wireframe/image.png',
                  name: 'Wiladhianty Yulianova'
                }}
                userView
              />

              <SideNavItem
                href="/"
                icon={<Icon><FaUserAlt/></Icon>}
              >
                Profil Saya
              </SideNavItem>
              <SideNavItem 
                href="/"
                icon={<Icon><FaQuestionCircle/></Icon>}
              >
                Hubungi Kami
              </SideNavItem>

              <SideNavItem divider />

              <SideNavItem subheader>
                Product
              </SideNavItem>

              <SideNavItem
                href="/"
                waves
              >
                Kesehatan
              </SideNavItem>
              <SideNavItem
                href="/"
                waves
              >
                Komputer & Aksesoris
              </SideNavItem>
              <SideNavItem
                href="/"
                waves
              >
                Gaming
              </SideNavItem>
              <SideNavItem
                href="/"
                waves
              >
                Kamera
              </SideNavItem>
              <SideNavItem
                href=""
                waves
              >
                Olahraga
              </SideNavItem>
              <SideNavItem
                href="/"
                waves
              >
                Fashion Pria
              </SideNavItem>
              <SideNavItem
                href="/"
                waves
              >
                Fashion Wanita
              </SideNavItem>
            </SideNav>
          </Col>
        </Row>
        {/* End Sise Navigation */}

        <Row>
          <Slider
            fullscreen={false}
            options={{
              duration: 500,
              indicators: true,
              height: 400,
              interval: 6000
            }}
          >
            <Slide image={<img alt='' src='https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg'/>}>
              <Caption placement="center">
                <h3>
                  Pantai
                </h3>
                <h5>
                  Dapatkan Kesempatan Jalan-Jalan ke Pantai dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>

            <Slide image={<img alt='' src='https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg'/>}>
              <Caption placement="center">
                <h3>
                  Eiffel Tower
                </h3>
                <h5>
                  Dapatkan Kesempatan Jalan-Jalan ke Pantai dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>

            <Slide image={<img alt='' src='https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72'/>}>
              <Caption placement="center">
                <h3>
                  Pantai
                </h3>
                <h5>
                  Dapatkan Kesempatan Jalan-Jalan ke Pantai dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>

          </Slider>
        </Row>

        {/* Card */}
        <Row>
          <h5>Hot List</h5>
          <Col s={3}>
            <Card
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
                  Audio
                </CardTitle>
              }
            >
              <p>
              Audio Technica - Mulai dari 
              <mark style={{backgroundColor:'red'}}>Rp 910 rb</mark>
              </p>
            </Card>
          </Col>

          <Col s={3}>
            <Card
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
                  Handphone
                </CardTitle>
              }
            >
              <p>
                Handphone Samsung - Mulai dari
              <mark style={{backgroundColor:'red'}}> Rp 200 rb</mark>
              </p>
            </Card>
          </Col>

          <Col s={3}>
            <Card
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
                  Squishy
                </CardTitle>
              }
            >
              <p>
                Squishy - Mulai dari 
                <mark style={{backgroundColor:'red'}}>Rp 5,5 rb</mark>
              </p>
            </Card>
          </Col>

          <Col s={3}>
            <Card
              header={
                <CardTitle image=" https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
                  Koleksi The Avenger
                </CardTitle>
              }
            >
              <p>
                Koleksi The Avenger - Mulai dari 
                <mark style={{backgroundColor:'red'}}>Rp 10 rb</mark>
              </p>
            </Card>
          </Col>
        </Row>
        {/* End Card */}

        <Row>
          {/* Pagination */}
          <Pagination
            activePage={2}
            items={8}
            leftBtn={
              <Icon><FaAngleLeft/></Icon>
            }
            rightBtn={
              <Icon><FaAngleRight/></Icon>
            }
          />
        </Row>
      </div>
      
    )
  }
}

export default App;
