class IndexPageController < ApplicationController
  def index_page
  end

  def contact

  end
  
  def message_received
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    ActionMailer::Base.mail(
      :from => @email,
      :to => "myemail@email.com",
      :subject => "New message received from #{@name}",
      :message => @message).deliver_now
  end

end
