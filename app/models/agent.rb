class Agent < ApplicationRecord
  has_many :mapagents
  has_many :maps, through: :mapagents
end
