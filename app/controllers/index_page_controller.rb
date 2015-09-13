class IndexPageController < ApplicationController
  def index_page
  end

  def contact
    respond_to do |format|
      format.html
      format.js
    end
  end
  
  def message

  end

end
