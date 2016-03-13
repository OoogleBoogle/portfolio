Rails.application.routes.draw do
  root 'index_page#index'
  get 'index_page/contact' => 'index_page#contact', :as => :contact
  post 'index_page/message_received'
end
