class MapsController < ApplicationController

    def index
        render json: Map.all, status: :ok
    end

    def usermaps
        chavo = current_user
        # byebug
        mijo = chavo.maps.uniq
        render json: mijo, status: :ok
    end

    def show
        map = Map.find_by!(uuid: params[:id])
        if map
            render json: map, status: :ok
        else
            render json: {}, status: :not_found
        end
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
