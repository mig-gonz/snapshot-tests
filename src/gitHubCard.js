// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function GitHUbCard() {
  const resize = {
    height: "200px",
    width: "200px",
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>mig-gonz</Card.Title>
        <Image
          style={resize}
          src="https://www.freecodecamp.org/news/content/images/2021/03/cheerful-positive-coder.jpg"
          alt="photo of mig-gonz"
        />
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          pulvinar proin gravida hendrerit. Sed euismod nisi porta lorem mollis
          aliquam ut. Donec massa sapien faucibus et molestie ac feugiat. Mauris
          in aliquam sem fringilla ut morbi tincidunt augue.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHUbCard;
