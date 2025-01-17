require 'rest-client'
require 'json'


class ApimapsController < ApplicationController
    def index   
        url = "https://valorant-api.com/v1/maps"
        response = RestClient.get(url)
        hash = JSON.parse(response)["data"]
        maps = hash.reject{|map| map["uuid"] == "ee613ee9-28b7-4beb-9666-08db13bb2244"}
        pearless = maps.reject{|map| map["uuid"] == "fd267378-4d1d-484f-ff52-77821ed10dc2"}
        render json: pearless, status: :ok
    end

    def show
        url = "https://valorant-api.com/v1/maps/#{params[:id]}"
        response = RestClient.get(url)
        render json: response, status: :ok    
    end

end
