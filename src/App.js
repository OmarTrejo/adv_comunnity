import './App.css';
import { Layout, Modal, Menu, Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import { Component, useState } from 'react'

//AG GRID 
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const {Header, Content, Footer } = Layout;

class App extends Component {

  state = { 
    visible : false, 
    personalizado : false, 
    colonoVehicular : 0, 
    colonoPeatonal : 0,
    personalPeatonal : 0,
    personalVehicular : 0,
    visitasVip : 0
  };

  _handleClick = (e) => {
      this.setState( { visible : e.key } );
  }

  _handleClickConf = (e) => {
    this.setState( { personalizado : e.key } );
  }

  _setVisible = () => 
  {
    this.setState( { visible : false } );
  }

  _handleSave = () => 
  {
    alert(`DATOS PARA GUARDAR \n${JSON.stringify(this.state)}`);
  }

  _handleChange = () => {
    this.setState({
      colonoVehicular : document.getElementById("colonoVehicular").value,
      colonoPeatonal : document.getElementById("colonoPeatonal").value,
      personalPeatonal : document.getElementById("personalPeatonal").value,
      personalVehicular : document.getElementById("personalVehicular").value,
      visitasVip : document.getElementById("visitasVip").value
    });
  }

  render()
  {
    return (
      <Layout className='App'>
        <Header style={{ position: 'fixed', zIndex: 1, width: '90%' }}>
              <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="false" onClick={this._handleClick}>Personas facial</Menu.Item>
                <Menu.Item key="true" onClick={this._handleClick}>Configuración</Menu.Item>
            </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
              <AgGridReact
                  // rowData={rowData}
                  >
                  <AgGridColumn field="make"></AgGridColumn>
                  <AgGridColumn field="model"></AgGridColumn>
                  <AgGridColumn field="price"></AgGridColumn>
              </AgGridReact>
            </div>  
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALL RIGHTS RESERVED</Footer>

        {this.state.visible == "true"
        ? 
          <Modal
              title="PANTALLA DE CONFIGURACIÓN"
              centered
              visible={this.state.visible}
              onOk={this._handleSave}
              onCancel= {this._setVisible}
              width={1000}
          >
            <Layout className='App'>
                <Header className="Header-wrapper" style={{ position: 'fixed', zIndex: 1 }}>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="false" onClick={this._handleClickConf}>Aplicar a todos</Menu.Item>
                        <Menu.Item key="true" onClick={this._handleClickConf}>Personalizado</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    {this.state.personalizado == "true" 
                    ? 
                      <div>THIS IS HERE FOR ANOTHER TABLE</div>
                    : 
                    
                    <Form method="POST" onSubmitCapture={this._handleSave}>
                        <Form.Item label="COLÓNO VEHICULAR">
                            <Input placeholder="0" id="colonoVehicular" name="colonoVehicular" style={{width:'70%'}} type="number" min="0" required={true} onChange={this._handleChange} />
                        </Form.Item> 
                        <Form.Item label="COLÓNO PEATONAL">
                            <Input placeholder="0" id="colonoPeatonal" name="colonoPeatonal" style={{width:'70%'}} onChange={this._handleChange} type="number" min="0" required={true} />
                        </Form.Item>
                        <Form.Item label="PERSONAL PEATONAL">
                            <Input placeholder="0" id="personalPeatonal" name="personalPeatonal" style={{width:"200px"}} type="number" min="0" required={true} onChange={this._handleChange} />
                        </Form.Item>
                        <Form.Item label="PERSONA VEHICULAR">
                            <Input placeholder="0" id="personalVehicular" name="personalVehicular" style={{width:"200px"}} type="number" min="0" required={true} onChange={this._handleChange}/>
                        </Form.Item>
                        <Form.Item label="VISITAS VIP">
                            <Input placeholder="0" id="visitasVip" name="visitasVip" style={{width:"200px"}} type="number" min="0" required={true} onChange={this._handleChange}/>
                        </Form.Item>
                        <Form.Item >
                            <Button onClick={this._handleSave} type="primary">Guardar</Button>
                        </Form.Item>
                    </Form>  
                } 
                </div>
                </Content>
            </Layout>  
          </Modal>
       : this._setVisible
      }
      </Layout>
    )
  }
}

export default App;
