import React from 'react'
import { Switch, Redirect } from 'effector-easy-router'

import { general_route } from './index'
import RenderGame from '@pages/render-game/render-game'

function Route(RouteName, RoutePage, exact, params) {
  this.RouteName = RouteName
  this.RoutePage = RoutePage
  this.exact = exact
  this.params = params
}

const Routes = [new Route(general_route, RenderGame, true)]

export default function RoutesRender() {
  return (
    <Switch>
      {Routes.map((Route, i) => (
        <Route.RouteName exact={Route.exact} params={Route.params} key={i}>
          <Route.RoutePage />
        </Route.RouteName>
      ))}
      <Redirect to={general_route} />;
    </Switch>
  )
}
