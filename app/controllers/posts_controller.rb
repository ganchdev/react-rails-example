require 'net/http'
require "uri"

class PostsController < ApplicationController

  before_action :fetch_data

  def index
    @posts = @data.to_json
  end

  def show
    record = @data.filter { |r| r[:id] == params[:id].to_i }.first
    @post = { id: params[:id], title: record[:title], content: record[:content]}.to_json
  end

  private

  def fetch_data
    @data ||= begin
      titles = ["Tail beef", "Ribeye quis", "Turkey burgdoggen", "Pastrami rump", "Buffalo frankfurter"]
      titles.map.with_index do |title, i|
        {
          id: i,
          title: title,
          content: "This is text for #{title}"
        }
      end
    end
  end

end
