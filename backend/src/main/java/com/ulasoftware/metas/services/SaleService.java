package com.ulasoftware.metas.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ulasoftware.metas.dto.SaleDTO;
import com.ulasoftware.metas.entities.Product;
import com.ulasoftware.metas.entities.Sale;
import com.ulasoftware.metas.repositories.ProductRepository;
import com.ulasoftware.metas.repositories.SaleRepository;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;
    
    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAllPaged(PageRequest pageRequest) {
        Page<Sale> salePage = saleRepository.findAll(pageRequest);
        List<Sale> sales = salePage.getContent();

        // Fetch products for all sales
        Map<Long, List<Product>> productsBySaleId = fetchProductsForSales(sales);

        List<SaleDTO> saleDTOs = sales.stream()
                .map(sale -> new SaleDTO(sale, productsBySaleId.get(sale.getId())))
                .collect(Collectors.toList());

        return new PageImpl<>(saleDTOs, pageRequest, salePage.getTotalElements());
    }

    private Map<Long, List<Product>> fetchProductsForSales(List<Sale> sales) {
        Map<Long, List<Product>> productsBySaleId = new HashMap<>();
        
        for (Sale sale : sales) {
            List<Product> products = productRepository.findBySalesId(sale.getId());
            productsBySaleId.put(sale.getId(), products);
        }

        return productsBySaleId;
    }
}
