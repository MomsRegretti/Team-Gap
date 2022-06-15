require 'rest-client'
require 'json'


class ApimapsController < ApplicationController
    def index
        url = "https://valorant-api.com/v1/maps"
        response = RestClient.get(url)
        render json: response, status: :ok
    end

    def show
        url = "https://valorant-api.com/v1/maps/#{params[:id]}"
        response = RestClient.get(url)
        render json: response, status: :ok    
    end

end
