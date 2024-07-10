

import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import "./learn.css";

import Layout from "../../components/Layout/Layout";


import { useAuth } from "../../context/auth";

function Learn() {



  const [auth, setAuth] = useAuth();
  return (
    <>
  
    <Layout title={"learn with experts!"}>
    <h2 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name} , Skill Up with Experts from India!`}
              <p className="text-center">
                
              </p>
            </h2>


      
      <div className="row mt-3">
        <div className="col-md-12">
      {Sdata.map((val) => (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      ))}
      </div>
      </div>
      </Layout>
    </>
  );
}

export default Learn;
