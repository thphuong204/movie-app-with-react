import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const mockupData = [
  {
    path: "/",
    name: "Trang chủ",
    children: [],
  },
  {
    path: "/orial-test",
    name: "Orial Test",
    children: [],
  },
  {
    path: "/react",
    name: "React",
    children: [
      {
        path: "state-prop",
        name: "State and Prop",
        children: [
          {
            path: "state",
            name: "State",
            children: [],
          },
          {
            path: "prop",
            name: "Prop",
            children: [],
          },
        ],
      },
      {
        path: "hook",
        name: "Hook",
      },
    ],
  },
];

const RenderItem = ({ dat, i }) => {
  return (
    <Nav.Item>
      <Nav.Link eventKey={`${i}`} href={`${dat.path}`}>
        {`${dat.name}`}
      </Nav.Link>
    </Nav.Item>
  );
};

const RenderSubMenu = ({ childrens, i }) => {
  if (childrens.children && childrens.children.length > 0) {
    return (
      <>
        {childrens.children.map((dat, i) => {
          return (
            <NavDropdown title={childrens.name} id={i}>
              <RenderSubMenu childrens={dat} i={i} />
            </NavDropdown>
          );
        })}
      </>
    );
  }
  return <RenderItem dat={childrens} i={i} />;
};

function NavDropdownExample({ menus = mockupData }) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      {menus.map((dat, i) => {
        return <RenderSubMenu childrens={dat} i={i} />;
      })}

      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default NavDropdownExample;
