import React from "react";
import Table from "../../components/ui/Table";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/ui/Input";

function HomePage() {
 return (
  <main className="flex flex-col lg:flex-row justify-center items-center gap-6">
   <h2>Home Page</h2>
   <Table.Root>
    <Table.Head />
    <Table.Body
     iteration={1}
     province="Jawa Tengah"
     positive={100}
     recovered={50}
     medicate={10}
     dead={5}
    />
   </Table.Root>
   <Button title="Button Component" />
   <Card.Root>
    <Card.Header
     heading="Card Title"
     sub="Card Content"
     subVariant="text-primary"
    />
   </Card.Root>

   <Form action="_blank" method="POST" className="flex flex-col gap-4">
    <Input.Root>
     <Input.Label htmlFor="name" label="Title" />
     <Input.Field name="name" type="text" id="name" />
    </Input.Root>
   </Form>
  </main>
 );
}

export default HomePage;
