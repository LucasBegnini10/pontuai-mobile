import { ColumnContainer } from "./column.style";
import { ColumnProps } from "./column.type";

export default function Column(props: ColumnProps) {
  return <ColumnContainer {...props} />;
}
