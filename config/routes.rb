Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :user do
    resource :bitset do
      get '/theory', to: 'pages#theory'
      get '/about', to: 'pages#about_us'
      resource :survey
    end
  end
end
