import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import MyAppBar from "./components/layout/AppBar";
import CreateUser from "./components/user/CreateUser";
import ListUser from "./components/user/ListUser";
import ShowUser from "./components/user/ShowUser";
import EditUser from "./components/user/EditUser";
import ProfilesList from "./components/profiles/ProfilesList";
import ListGroups from "./components/groups/ListGroups";

function App() {
  return (
    <Admin dataProvider={dataProvider} layout={MyAppBar}>
      <Resource
        name="users"
        create={CreateUser}
        list={ListUser}
        show={ShowUser}
        edit={EditUser}
      />
      <Resource name="profiles" list={ProfilesList} />
      <Resource name="groups" list={ListGroups} />
    </Admin>
  );
}

export default App;
