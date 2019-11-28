import React, { Component } from "react";
import NavigationBarView from "../../components/navigationBar/navigationBarView";
import AdminMenu from "../../components/admin/menu";
import { Grid } from "semantic-ui-react";

class AdminSkill extends Component {
  render() {
    return (
      <div>
        <NavigationBarView />

        <Grid>
          <Grid.Column width={4}>
            <AdminMenu></AdminMenu>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AdminSkill;
