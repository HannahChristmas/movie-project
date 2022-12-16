Rails.application.routes.draw do
  
  resources :reviews
  resources :movies
  resources :users
  # Routing logic: fallback requests for React Router.
  post 'signup', to: 'users#create'
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
