
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "./components/Navbar";
import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getFiles } from "./services/toolBoxAPI";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    async function fetchAPI() {
      const response = await getFiles();
      if (response.length > 0) {
        setData(response);
      }
      else alert('No existe registros')
    }
    fetchAPI();
  }, []);

  let item = 0;
  return (
    <>
      <Head />
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
        <tbody>
          {
            data.map((element) => {
              return element.lines.map((line) => {
                item++;
                return (
                  <tr>
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
      </Table>
    </>
  );
}

export default App;
