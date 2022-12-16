class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid

  private 
  
  def handle_invalid(invalid) 
    render json: { errors: invalid.record.errors.full_messages}, status: 422
  end
end
