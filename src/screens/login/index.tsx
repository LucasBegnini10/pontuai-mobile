import { Text } from "react-native";
import { Container } from "./style";
import Row from "../../components/common/row/row";
import Separator from "../../components/common/separator/separator";

export default function Login() {
  return (
    <Container>
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Separator style={{ width: "25%" }} />
        <Text>Icon</Text>
        <Separator style={{ width: "25%" }} />
      </Row>
    </Container>
  );
}
