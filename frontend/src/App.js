
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "./components/Navbar";
import { Table, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getFiles, getOneTest } from "./services/toolBoxAPI";
import './App.css';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {

    async function fetchAPI() {
      const response = await getFiles();
      if (response !== []) {
        switch (response.status) {
          case 'success':
            setData(response.data);
            break;
          case 'info':
            alert(response.msg);
            break;
          case 'error':
            alert(response.msg)
            break;
          default:
        }
      }
    }
    fetchAPI();
  }, []);

  const searchCSV = async (fileName) => {
    setData([]);
    const response = await getOneTest(fileName);
    if (response !== []) {
      switch (response.status) {
        case 'success':
          setData(response.data);
          break;
        case 'info':
          setData([]);
          alert(response.msg);
          break;
        case 'error':
          setData([]);
          alert(response.msg)
          break;
        default:
      }
    }
  }

  let item = 0;
  return (
    <>
      <Head search={(e) => { searchCSV(e) }} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>File</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        {data.length > 0 &&
          <tbody>
            {
              data.map((element) => {
                return element.lines.map((line) => {
                  item++;
                  return (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{element.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  );
                });
              })
            }
          </tbody>
        }
      </Table>
      {data.length === 0 &&
        <div class="d-flex justify-content-center">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
        </div>
      }
    </>
  );
}

export default App;
