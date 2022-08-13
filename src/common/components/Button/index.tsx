interface IButton {
  children: string
}

import { 
  Container
} from "./styles"

export default function Button({
  children,
} : IButton) {
  return (
    <Container>{children}</Container>
  )
}
