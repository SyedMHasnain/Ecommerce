import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const products = [
  {
    title: "T-shirt",
    price: "50",
    rating: "4",

    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:

      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,",
  },
]; 
const App = () => (
  <div className="flex  justify-center  gap-6    p-10 items-center max-[640px]:flex-col ">
    <Card
      hoverable
      style={{
        width: 250,
        backgroundColor: "lightgray",
      }}
      cover={
        <img
          alt="example"
          src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: 200 }}
        />
      }>
      <Meta
        style={{ fontSize: 10, fontWeight: "bold" }}
        title="book Now "
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,"
      />
    </Card>

    <Card
      hoverable
      style={{
        width: 250,
        backgroundColor: "lightgray",
      }}
      cover={
        <img
          alt="example"
          src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: 200 }}
        />
      }>
      <Meta
        style={{ fontSize: 10, fontWeight: "bold" }}
        title="book Now "
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,"
      />
    </Card>

    <Card
      hoverable
      style={{
        width: 250,
        backgroundColor: "lightgray",
      }}
      cover={
        <img
          alt="example"
          src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: 200 }}
        />
      }>
      <Meta
        style={{ fontSize: 10, fontWeight: "bold" }}
        title="book Now "
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,"
      />
    </Card>
  </div>
);
export default App;
