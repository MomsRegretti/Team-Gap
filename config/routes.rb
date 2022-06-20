Rails.application.routes.draw do

  resources :apimaps, only: [:index, :show ]
  resources :users
  resources :comments
  resources :maps, only: [:index, :show]
  resources :agents, only: [:index, :show ]
  
  get '/authorized_user', to: 'users#authorized_user'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/usermaps', to: 'maps#usermaps'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
