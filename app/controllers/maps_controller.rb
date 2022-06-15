class MapsController < ApplicationController

    def index
        render json: Map.all, status: :ok
    end

    def show
        map = Map.find_by(uuid: params[:id])
        render json: map, status: :ok
    end

    def create
        map = Map.create!(map_params)
        render json: map, status: :created
    end

    private
    def map_params
        params.permit(:uuid, :splash, :listViewIcon, :displayName)
    end
end
