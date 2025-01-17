class AgentsController < ApplicationController

    def index
        render json: Agent.all, status: :ok
    end

    def show
        agent = Agent.find_by!(params[:uuid])
        render json: agent, status: :ok
    end
end
