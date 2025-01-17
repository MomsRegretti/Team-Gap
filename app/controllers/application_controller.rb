class ApplicationController < ActionController::API

  # before_action :authorize_user

  include ActionController::Cookies
  wrap_parameters false

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

  def current_user
    User.find_by(id: session[:current_user])
  end

  private

  def authorize_user
    @current_user =  User.find_by(id: session[:current_user])
    return render json: { error: "Not Authorized" }, status: :unauthorized unless @current_user
  end

  def record_not_found_response(not_found)
      render json: { error: "#{not_found.model} not found" }, status: :not_found
  end
  
  def record_invalid_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
