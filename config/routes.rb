Rails.application.routes.draw do
  # Pages Controller
  get '/', to: 'pages#index'

  # Root page
  root to: 'pages#index'
end
