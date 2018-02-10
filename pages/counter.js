import React from 'react';
import web3 from '../lib/web3';
import { Button, Card, Icon, Label } from 'semantic-ui-react';
import Layout from '../components/layout';
import apiClient from '../lib/api-client';
import Link from 'next/link';

class Counter extends React.Component {
  state = { account: null, clickCount: 0 };

  async componentDidMount() {
    const account = await this.getWalletAccount();
    this.setState({ account });
    await this.getUserForAccount(account);
  }

  async getUserForAccount(account) {
    await this.findUser(account);
    this.updateCount();
  }

  // fetch system user.
  async findUser(account) {
    const user = await apiClient.findOrCreate(account);
    return user;
  }

  // get eth account.
  async getWalletAccount() {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  }

  async updateCount() {
    if (this.state.account) {
      let user = await apiClient.find(this.state.account);
      this.setState({ clickCount: user.count });
    }
  }

  async incCount() {
    await apiClient.update(this.state.account, {
      count: this.state.clickCount + 1
    });
    this.updateCount();
  }

  renderCount() {
    return (
      <div>
        <Icon name="database" />
        <Label circular color="orange">
          {this.state.clickCount} click(s)
        </Label>
      </div>
    );
  }

  renderAccount() {
    return (
      <Card
        fluid
        raised
        header="Current Account"
        description={this.state.account}
        extra={this.renderCount()}
      />
    );
  }

  render() {
    return (
      <Layout>
        <Label>
          <Icon name="lightbulb" />
          What is this? A click counter!
        </Label>
        {this.renderAccount()}
        <Button
          icon="add"
          content="Increment"
          primary
          onClick={() => this.incCount()}
        />
        <Button
          icon="refresh"
          content="Refresh"
          secondary
          onClick={() => this.updateCount()}
        />
        <Link href="/login">
          <Button floated="right" content="Switch Account" />
        </Link>
      </Layout>
    );
  }
}

export default Counter;
