/**
 * @file resource-inventory.tsx
 * @description Resource management component for JACC
 * Displays resource inventory with quantities, categories, and status indicators
 */

"use client";

import React from "react";
import { Package, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react";
import type { Resource } from "@/services/mock-data";

interface ResourceInventoryProps {
    resources: Resource[];
    title?: string;
    filterByCategory?: string;
}

const ResourceInventory: React.FC<ResourceInventoryProps> = ({
    resources,
    title = "Resource Inventory",
    filterByCategory,
}) => {
    // Handle undefined resources array
    if (!resources || !Array.isArray(resources)) {
        return (
            <div className="w-full my-4">
                <div className="jacc-card-header mb-4">
                    <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                    <p className="text-sm text-gray-400 mt-1">Loading resource data...</p>
                </div>
            </div>
        );
    }

    const filteredResources = filterByCategory
        ? resources.filter((r) => r.category === filterByCategory)
        : resources;

    const getStatusIcon = (status: Resource["status"]) => {
        switch (status) {
            case "Available":
                return <CheckCircle className="w-4 h-4 text-green-400" />;
            case "Low Stock":
                return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
            case "Out of Stock":
                return <XCircle className="w-4 h-4 text-red-400" />;
            case "Reserved":
                return <Clock className="w-4 h-4 text-blue-400" />;
            default:
                return <Package className="w-4 h-4 text-gray-400" />;
        }
    };

    const getQuantityColor = (quantity: number, maxQuantity: number) => {
        const percentage = (quantity / maxQuantity) * 100;
        if (percentage === 0) return "text-red-400";
        if (percentage < 25) return "text-orange-400";
        if (percentage < 50) return "text-yellow-400";
        return "text-green-400";
    };

    const getCategoryColor = (category: Resource["category"]) => {
        switch (category) {
            case "Equipment":
                return "bg-cyan-500/20 text-cyan-400 border-cyan-500";
            case "Supplies":
                return "bg-green-500/20 text-green-400 border-green-500";
            case "Vehicles":
                return "bg-purple-500/20 text-purple-400 border-purple-500";
            case "Technology":
                return "bg-blue-500/20 text-blue-400 border-blue-500";
            default:
                return "bg-gray-500/20 text-gray-400 border-gray-500";
        }
    };

    const getStockBarColor = (quantity: number, maxQuantity: number) => {
        const percentage = (quantity / maxQuantity) * 100;
        if (percentage === 0) return "from-red-600 to-red-400";
        if (percentage < 25) return "from-orange-600 to-orange-400";
        if (percentage < 50) return "from-yellow-600 to-yellow-400";
        return "from-green-600 to-green-400";
    };

    return (
        <div className="w-full my-4">
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                {filterByCategory && (
                    <p className="text-sm text-gray-400 mt-1">
                        Category: {filterByCategory}
                    </p>
                )}
                <p className="text-sm text-gray-400 mt-1">
                    {filteredResources.length} resource types
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredResources.map((resource) => {
                    const stockPercentage = (resource.quantity / resource.maxQuantity) * 100;

                    return (
                        <div
                            key={resource.id}
                            className={`jacc-card p-4 ${resource.status === "Low Stock" || resource.status === "Out of Stock"
                                ? "border-red-500/50"
                                : ""
                                }`}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {resource.name}
                                    </h3>
                                    <div
                                        className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(
                                            resource.category
                                        )}`}
                                    >
                                        {resource.category}
                                    </div>
                                </div>
                                <div>{getStatusIcon(resource.status)}</div>
                            </div>

                            {/* Quantity Display */}
                            <div className="mb-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-400">Quantity:</span>
                                    <span
                                        className={`text-lg font-bold ${getQuantityColor(
                                            resource.quantity,
                                            resource.maxQuantity
                                        )}`}
                                    >
                                        {resource.quantity} / {resource.maxQuantity}
                                    </span>
                                </div>

                                {/* Stock Level Bar */}
                                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${getStockBarColor(
                                            resource.quantity,
                                            resource.maxQuantity
                                        )} transition-all duration-300`}
                                        style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                                    />
                                </div>
                            </div>

                            {/* Status and Location */}
                            <div className="space-y-2 pt-3 border-t border-gray-700">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Status:</span>
                                    <span
                                        className={`font-medium ${resource.status === "Available"
                                            ? "text-green-400"
                                            : resource.status === "Low Stock"
                                                ? "text-yellow-400"
                                                : resource.status === "Out of Stock"
                                                    ? "text-red-400"
                                                    : "text-blue-400"
                                            }`}
                                    >
                                        {resource.status}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Location:</span>
                                    <span className="text-foreground font-medium text-right">
                                        {resource.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredResources.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                    <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No resources found</p>
                </div>
            )}
        </div>
    );
};

export default ResourceInventory;
